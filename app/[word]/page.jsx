import Word from "@/components/Word";



/* export async function generateStaticParams({params  : { word }}) {

  const data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  ).then((res) => res.json())
    console.log(data)
    return data.map((word) => ({ word :  word.word}))

} */

const word = async ({ params }) => {
  const { word } = params;

  /* const [data] = await getData()
  console.log(data.word)
 */
  return (
    <Word word={word} />
    
  );
};

export default word;
