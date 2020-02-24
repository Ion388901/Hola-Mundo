exports.homepage = (req, res) => {
    res.render('pages/homepage');
}

exports.about = (req, res) => {
    res.send('About us');
}
/*
exports.homepage = (req, res) => {
    res.send('Raiz');
}

exports.about = (req, res) => {
    res.send('Acerca');
}

exports.extra = (req, res) => {
    res.send('Extra');
}
*/