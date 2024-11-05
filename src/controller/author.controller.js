export const getAllAuthors = (req, res, next) => {
    try {
        res.status(200).send("success all author")
    } catch (err) {
        next(err)
    }
}

export const getAuthorById = (req, res, next) => {
    try {
        res.status(200).send("success by id author")
    } catch (err) {
        next(err)
    }
}