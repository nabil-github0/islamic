const page = async () => {

  const randomNumber = Math.floor(Math.random() * 6236) + 1;

  const rawData = await fetch(`http://api.alquran.cloud/v1/ayah/${randomNumber}/en.asad`)

  const parsedData = await rawData.json()

  return (
    <div className="h-screen bg-gray-400 flex flex-col items-center justify-around">
      <div className="p-5 bg-gray-300 rounded shadow-md text-center font-semibold">
        <h1 className="text-lg">بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</h1>
        <p className="text-sm">In the name of God, Most Gracious, Most Merciful</p>
      </div>
      <div className="p-5 bg-gray-300 max-w-screen-xl mx-auto rounded shadow-md">
        <p className="text-left text-lg font-medium">{parsedData.data.text}</p>
        <span className="font-extrabold">Al Quran, Surah {parsedData.data.surah.englishName}, Verse {parsedData.data.numberInSurah}</span>
      </div>
    </div>
  )
}

export default page;