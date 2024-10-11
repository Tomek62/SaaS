import axios from "axios";

// Inscription d'un nouvel utilisateur
export const signUp = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`http://localhost:3001/auth/signup`, {
      name,
      email,
      password,
    });

    console.log("Utilisateur créé :", response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Erreur :", error.response.data.message);
    } else {
      console.error("Erreur inconnue :", error);
    }
  }
};

export const googleLogin = async (token: string) => {
  try {
    const response = await axios.post(
      `${process.env.API_BACKEND_URL}/auth/google`,
      { token },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data; // Gérer les erreurs
    } else {
      throw error; // Throw the unknown error
    }
  } 
};

export const verifyEmail = async (verificationCode: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/auth/verify-email`, {
      params: {
        code: verificationCode,
      },
    });

    console.log('Email verified:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Error:', error.response.data.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
};