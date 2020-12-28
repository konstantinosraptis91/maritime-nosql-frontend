import vesselImg from '../images/vessel-1.jpg';
import portImg from '../images/port.jpg';

const blockContext = [
    {
        path: 'vessels',
        imgPath: vesselImg,
        imgDescription: 'a vessel sailing at open seas',
        title: 'Λίστα Πλοίων',
        description: 'Επιλέξτε τον τύπο πλοίου που επιθυμείτε. ' +
            'Παρουσιάζονται αναλυτικά όλα τα πλοία που καταγράφηκαν από  το AIS. ' +
            'Μπορείτε να βρείτε όλους τους προορισμούς που είχαν δηλωθεί από τα πλοία και να μελετήσετε τις τροχιές τους, ' +
            'όπως παρουσιάζονται στον χάρτη'
    },
    {
        path: 'ports',
        imgPath: portImg,
        imgDescription: 'huge port',
        title: 'Λιμάνια',
        description: 'Ανακαλύψτε όλα τα λιμάνια που καταγράφηκαν από  το AIS. ' +
            'Σε κάθε λιμάνι υπάρχει η δυνατότητα εύρεσης των πλοίων που στάθμευσαν κατά τη χρονική διάρκεια των μετρήσεων'
    }
]

export default blockContext;