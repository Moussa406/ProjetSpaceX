import axios from 'axios';

const spacexApi = axios.create({
    baseURL: 'https://api.spacexdata.com/v5', // URL de base de l'API SpaceX v5
    timeout: 5000, // Temps d'attente maximal pour une requête
  });

export async function getLaunches() {
    try {
      const response = await spacexApi.get('/launches');
      return response.data; // Retourne la liste des lancements
    } catch (error) {
      console.error('Erreur lors de la récupération des lancements :', error);
      throw error;
    }
  }

  export async function getNextLaunch() {
    try {
      const response = await spacexApi.get('/launches/next');
      return response.data; // Retourne les données du prochain lancement
    } catch (error) {
      console.error('Erreur lors de la récupération du prochain lancement :', error);
      throw error;
    }
  }

  export async function getSuccessfulLaunches() {
    try {
      const response = await spacexApi.get('/launches', {
        params: {
          success: true, // Filtre pour les lancements réussis
        },
      });
      return response.data; // Retourne la liste des lancements réussis
    } catch (error) {
      console.error('Erreur lors de la récupération des lancements réussis :', error);
      throw error;
    }
  }

  export async function getFailedLaunches() {
    try {
      const response = await spacexApi.get('/launches', {
        params: {
          success: false,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des lancements échoués :', error);
      throw error;
    }
  }
