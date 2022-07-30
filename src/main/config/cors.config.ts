
import cors from 'cors'

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000']

export const options: cors.CorsOptions = {
  origin: allowedOrigins
}
