const msToHours = duration => {
    let millis = Number.parseInt((duration % 1000) / 1000),
        secs = Math.floor((duration / 1000) % 60),
        mins = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const hourFormat = time => {
        return time < 10 ? '0' + time : time;
    }
    return `${hourFormat(hours)}:${hourFormat(mins)}:${hourFormat(secs)}${millis === 0 ? '' : '.' + millis}`
}



export default msToHours;