const getpredictedAge = async (name: string) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  return response.json();
};

const getPredictedGender = async (name: string) => {
  const response = await fetch(`https://api.genderize.io/?name=${name}`);
  return response.json();
};

const getPredictedCountry = async (name: string) => {
  const response = await fetch(`https://api.nationalize.io/?name=${name}`);
  return response.json();
};

//!---- declaring the type for the parameter passed into the functin
interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  //!---- two ways we can resolve a promise
  //!----  one-- resolving one promise at a time and then using their vars
  // const ageData = await getpredictedAge(params.name);
  // const genderData = await getPredictedGender(params.name);
  // const countryData = await getPredictedCountry(params.name);

  //!----  resolving all the promises at once and the destructuring
  const ageData = getpredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);
  const [ageObj, genderObj, countryObj] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <main className="flex min-h-screen bg flex-col items-center j p-24 bg-black">
     <div className="bg-white w-96 p-3 rounded-lg">
      <div className=" text-indigo-500 font-bold text-lg ">Personal info</div>
      <div><span className=" font-bold">Age:</span> {ageObj?.age}</div>
      <div><span className=" font-bold">Gender:</span> {genderObj?.gender}</div>
      <div><span className=" font-bold">Country: </span>  
      { countryObj?.country[0]?.country_id }</div>
   
     </div>
    </main>
  );
}
