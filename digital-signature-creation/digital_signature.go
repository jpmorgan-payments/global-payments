package main

import (
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"fmt"
	"io/ioutil"
	"log"

	"github.com/dgrijalva/jwt-"
)

func main() {
	privateKey, err := ioutil.ReadFile("private.pem")
	if err != nil {
		log.Fatal(err)
	}

	block, _ := pem.Decode(privateKey)
	if block == nil {
		log.Fatal("failed to parse PEM block containing the key")
	}

	rsaPrivateKey, err := x509.ParsePKCS1PrivateKey(block.Bytes)
	if err != nil {
		log.Fatal(err)
	}

	token := jwt.NewWithClaims(jwt.SigningMethodRS256, jwt.MapClaims{
		"foo": "bar",
	})

	tokenString, err := token.SignedString(rsaPrivateKey)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(tokenString)
}