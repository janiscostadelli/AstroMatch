import axios from "axios";

export const GetProfile = async () => {
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

export const ChoosePerson = (id, choice) => {
  axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janis-cruz/choose-person`,
    { id, choice }
  );
};