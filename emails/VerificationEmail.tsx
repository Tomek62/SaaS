import React from "react";
import { Html, Text, Container } from "@react-email/components";

interface VerificationEmailProps {
  code: string;
}

export default function VerificationEmail({ code }: VerificationEmailProps) {
  return (
    <Html>
      <Container>
        <Text>Bonjour,</Text>
        <Text>Merci de vous être inscrit sur notre plateforme !</Text>
        <Text>Votre code de vérification est : {code}</Text>
        <Text>Merci,</Text>
        <Text>L'équipe de FoodPoint</Text>
      </Container>
    </Html>
  );
};


