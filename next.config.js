module.exports= {
    rewrites: async function() {
        return [
            {
                source: "/aguacate/:path*",
                destination: "/product/:path*"
            }
        ]
    }
}