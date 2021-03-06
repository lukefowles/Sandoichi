import jwt from 'jsonwebtoken'


export default function auth (res, req, next) {
    const token = req.cookies['auth-token']
    if(!token) return res.status(401).send('Acess Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
    }
    catch(err) {
        res.status(400).send('Invalid token');
    }

}