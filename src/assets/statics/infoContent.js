import reactLogo from '../images/logo512.png';
import javaLogo from '../images/java-logo.png';
import mongoLogo from '../images/mongo.png';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 10/1/2021.
 */
const infoContext = [
    {
        image: reactLogo,
        alt: 'image of React',
        url: 'https://reactjs.org',
        title: 'React',
        desc: 'Για την ανάπτυξη του frontend της εφαρμογής maritime χρησιμοποιήθηκε η JavaScript library React, ' +
            'με σκοπό τη δημιουργία ενός διαδραστικού γραφικού περιβάλλοντος με τη δημιουργία και επαναχρησιμοποίηση ' +
            'Components που συνθέτουν ένα πολύπλοκο και φιλικό προς τον χρήστη UI'
    },
    {
        image: javaLogo,
        alt: 'image of Java',
        url: 'https://adoptopenjdk.net',
        title: 'Java',
        desc: 'Για την ανάπτυξη του backend της εφαρμογής maritime χρησιμοποιήθηκε η γλώσσα προγραμματισμού Java, το Javalin framework και το ' +
            'building tool Gradle με χρήση Kotlin scripts. Υλοποιήθηκε ένα multi-module Gradle Project ' +
            'το οποίο περιλαμβάνει τα ακόλουθα modules: API, DB, Model, Parser, Retriever'
    },
    {
        image: mongoLogo,
        alt: 'image of mongoDB',
        url: 'https://www.mongodb.com/3',
        title: 'MongoDB',
        desc: 'Για την αποθήκευση των δεδομένων που ανακτήθηκαν χρησιμοποιήθηκε το Σύστημα Αποθήκευσης μη Σχεσιακής Βάσης ' +
            'Δεδομένων MongoDB. Η μοντελοποίηση τους στην ΒΔ έγινε με γνώμονα τις ανάγκες της εφαρμογής ' +
            'πραγματοποιώντας κατάλληλη ευρετηρίαση των Collection.'
    }
];

export default infoContext;