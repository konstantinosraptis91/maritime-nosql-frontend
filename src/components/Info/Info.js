import React from 'react';
import {Link} from 'react-router-dom';
import {FaFilePdf} from 'react-icons/all';

import infoContext from '../../assets/statics/infoContent';
import Card from '../UI/Card/Card';

import classes from './Info.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 9/1/2021.
 */


const info = props => {

    return (
        <div className={classes.Info}>
            <section className={classes.Description}>
                <h2>
                    Περιγραφή Maritime
                </h2>
                <article>
                    Η εφαρμογή Maritime περιέχει στοιχειά από το σύνολο
                    δεδομένων <a href="https://zenodo.org/record/1167595#.X80GU2gzabg" target="_blank" rel="noreferrer">
                    «Heterogeneous Integrated Dataset for Maritime Intelligence, Surveillance, and Reconnaissance»
                </a>. Μέσα από τις λειτουργίες της εφαρμογής παρουσιάζεται στον χρήστη πληθώρα πληροφοριών για πλοία
                    που
                    κινήθηκαν στις θαλάσσιες περιοχές της βόρειας Ευρώπης την περίοδο 01/10/2015 έως 31/03/2016, όπως
                    διάφορα στοιχεία περιγραφής των πλοίων, κινήσεις, γεωστατικά δεδομένα της περιοχής κίνησής τους,
                    καθώς και αποστάσεις τους από λιμάνια από τα οποία πέρασαν κατά τη διάρκεια των ταξιδιών τους.
                </article>
                <h2>Σκοπός Ανάπτυξης</h2>
                <article>
                    Η εφαρμογή αναπτύχθηκε στο πλαίσιο εκπόνησης εργασίας τους μαθήματος "(ΠΠΣ-183) - Διαχείριση
                    Δεδομένων
                    για Σχεσιακές και μη Σχεσιακές Βάσεις Δεδομένων" του ΠΜΣ <strong>"Πληροφοριακά Συστήματα και
                    Υπηρεσίες"</strong> με
                    κατεύθυνση τα Προηγμένα Πληροφοριακά Συστήματα. <br/>
                    Η εργασία αφορά στο σχεδιασμό μη σχεσιακής Βάσης Δεδομένων χρησιμοποιώντας το σύστημα αποθήκευσης
                    δεδομένων MongoDB, για τη διαχείριση και παρουσίαση μεγάλου όγκου πληροφοριών. Για τις ανάγκες της
                    εφαρμογής επιλέχθηκαν δεδομένα από διαφορετικά σετ τα οποία μοντελοποιήθηκαν κατάλληλα, με στόχο
                    την απόδοση ανάκτησης τους και την παρουσίαση συγκεντρωτικής πληροφορίας για κάθε πλοίο και κάθε
                    προορισμό, σε ένα φιλικό για το χρήστη περιβάλλον περιήγησης.
                </article>
                <h2>Εργαλεία Ανάπτυξης</h2>
                <div className={classes.Cards}>
                    {infoContext.map(card => (
                        <Card title={card.title}
                              description={card.desc}
                              image={card.image}
                              alt={card.alt}
                              url={card.url}
                              key={card.title}/>
                    ))}
                </div>
            </section>
            <section className={classes.Participants}>
                <Link to="/Maritime-User-Manual.pdf" target="_blank" rel="noreferrer">
                    <FaFilePdf style={{paddingRight: '.6rem'}}/> Οδηγός Χρήσης Εφαρμογής
                </Link>
                <div>
                    <h2>Ονοματεπώνυμα Φοιτητών</h2>
                    <ul>
                        <li>Σταύρος Λαμπρινός</li>
                        <li>Κωνσταντίνος Ράπτης</li>
                    </ul>
                </div>
                <a href="https://www.ds.unipi.gr/faculty/cdoulk/" target="_blank" rel="noreferrer">
                    <div>
                        <h2>Υπεύθυνος Καθηγητής</h2>
                        <p>Δρ. Χρήστος Δουλκερίδης</p>
                    </div>
                </a>
            </section>
        </div>

    );
}

export default info;

