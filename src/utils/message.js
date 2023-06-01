const message = (res, code, massage, data, pagintaion) => {
    let result = { code, massage, data, pagintaion}
    res.status(code).send(result)
}

export default message