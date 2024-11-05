export const registerAuthor = (req, res, next) => {
    try {
        res.status(200).send("success register")
    } catch (err) {
        next(err)
    }
}

export const loginAuthor = (req, res, next) => {
    try {
        res.status(200).send("success lgoin")
    } catch (err) {
        next(err)
    }
}