function niewiemcorobie() {
    let liczba = prompt("Proszę napisz swoją liczbę", "Hello nieznajomy!");
    if (liczba != null) {
        document.getElementById('paragraf').innerHTML =
        "Twoja liczba to " + liczba + "! Co za świetny wybór!";    
    }
}