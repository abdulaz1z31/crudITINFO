export const getAllCartegories = (req, res, next) => {
    try {
        res.status(200).send("success carteg all")
    } catch (err) {
        next(err)
    }
}

export const getCartegoryById = (req, res, next) => {
    try {
        res.status(200).send("success carteg by")
    } catch (err) {
        next(err)
    }
}