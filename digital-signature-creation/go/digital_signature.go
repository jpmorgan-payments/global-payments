package main

import (
    "fmt"
    "github.com/golang-jwt/jwt/v5"
    "os"
    "github.com/joho/godotenv"
)

func generate_digital_signature(digital_key string, body map[string]interface{}) string {
    token := jwt.NewWithClaims(jwt.SigningMethodRS256, jwt.MapClaims(body))
    signKey, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(digital_key))

    tokenString, err := token.SignedString(signKey)
    if err != nil {
        fmt.Println(err)
    }
    return tokenString
}

func main() {
    err := godotenv.Load()
    if err != nil {
        fmt.Println("Error loading .env file")
    }
    apiKey := os.Getenv("DIGITAL")
    fmt.Println(apiKey)
    fmt.Println(generate_digital_signature(apiKey, map[string]interface{}{"foo": "bar"}))
}