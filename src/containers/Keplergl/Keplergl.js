import React, {useEffect} from 'react';
import axios from '../../axios-maritime';

import keplerGlReducer from 'kepler.gl/dist/reducers';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {taskMiddleware} from 'react-palm/tasks';
import {Provider, useDispatch} from 'react-redux';
import KeplerGl from 'kepler.gl';
import useSWR from "swr";
import {useLocation} from 'react-router-dom';
import {addDataToMap} from "kepler.gl/dist/actions/actions";


/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 8/1/2021.
 */

const keplergl = props => {

    const reducers = combineReducers({
        keplerGl: keplerGlReducer
    });

    const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

    const Map = () => {
        const dispatch = useDispatch();
        const loc = useLocation();

        const { data } = useSWR("covid", async () => {
            const result = await axios(
                `${loc.pathname}`
            );
            const data = {
                fields: [
                    {name: 'Από', format: 'D/M/YYYY H:m:s', type: 'timestamp'},
                    {name: 'Έως', format: 'D/M/YYYY H:m:s', type: 'timestamp'},
                    {name: 'Πλήθος Κανονικοποίησης', format: '', type: 'integer'},
                    {name: 'Μέση Ταχύτητα', format: '', type: 'real'},
                    {name: 'MMSI', format: '', type: 'real'},
                    {name: 'Όνομα Πλοίου', format: '', type: 'string'},
                    {name: 'Τύπος Πλοίου', format: '', type: 'string'},
                    {name: 'longitude', format: '', type: 'real'},
                    {name: 'latitude', format: '', type: 'real'}
                ],
                rows: []
            };

            result.data.features.forEach(trajectory => {
                const trajectoryData = [
                    trajectory.properties.startDate,
                    trajectory.properties.endDate,
                    trajectory.properties.nPoints,
                    trajectory.properties.avgSpeed,
                    trajectory.properties.mmsi,
                    trajectory.properties.vesselName,
                    trajectory.properties.shipType,
                    trajectory.geometry.coordinates[0],
                    trajectory.geometry.coordinates[1],
                ]
                data.rows.push(trajectoryData);
            });

            return data;
        });


        useEffect(() => {
            // console.log(process.env.REACT_APP_MAPBOX_API)
            if (data) {
                console.log(data);
                dispatch(addDataToMap({
                    datasets: {
                        info: {
                            label: 'VESSEL_TRAJECTORIES',
                            id: 'vessel_Trajectories'
                        },
                        data
                    },
                    option: {
                        centerMap: true,
                        readOnly: false
                    },
                    config: {}
                }))
            }
        },[dispatch, data]);

        return (
            <KeplerGl id="trajectories"
                      mapboxApiAccessToken="pk.eyJ1Ijoic3RhbGFiIiwiYSI6ImNram80em4xazFlM2IyeXMyc2JwZWZhZDYifQ.9jd6rNZpsFlZq6Mb7uxLGQ"
                      width={window.innerWidth}
                      height={window.innerHeight}/>
        );
    };

    return (
        <Provider store={store}>
            <Map/>
        </Provider>
    );
}

export default keplergl;