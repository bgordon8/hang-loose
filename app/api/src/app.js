import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world!!!! thats whats up!!!"
    })
})

if (process.env.NODE_ENV !== "test") {
    app.listen(3000, () => {
        console.log('listening on port 3000...')
    })
}

export default app