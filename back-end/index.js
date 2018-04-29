const app = require("./app");
const PORT = 3050 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`App Running on PORT: ${PORT}`);
});