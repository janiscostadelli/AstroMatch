import axios from "axios";

export const getProfile = async () => {
  const result = await axios
    .get(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janis-cruz/person`
    )
    .then((res) => {
      return res.data.profile;
    })
    .catch(() => {
      return [];
    });
  return result;
};

export const choosePerson = (id, choice) => {
  axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janis-cruz/choose-person`,
    { id, choice }
  );
};

export const clear = () => {
  axios
    .put(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janis-cruz/clear`
    )
    .then((res) => {
      document.location.reload(true);
    })
    .catch(() => {
      return alert("Tente novamente");
    });
};

export const getMatches = async () => {
  const result = await axios
    .get(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janis-cruz/matches`
    )
    .then((res) => {
      return res.data.matches;
    })
    .catch(() => {
      return [];
    });
  return result;
};
