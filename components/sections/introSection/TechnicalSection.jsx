const TechnicalSection = () => {
  return (
    <div className="h-screen w-full bg-gri p-2">
      <div className="grid grid-cols-3 gap-2 h-full">
        <div className="col-span-1 px-6 py-20 bg-white rounded-4xl flex flex-col justify-between h-full relative">
          <h1 className="text-2xl text-center font-extrabold text-gray-500">
            Teknoloji
          </h1>

          <div className="flex flex-col items-center my-4">
            <div className="w-full h-[0.5] bg-gray-300 my-4"></div>
            <p className="font-extrabold text-gray-500 text-justify">
              Akıllı ev sistemleri entegreli Ivo-Bio ile günün her saatinde
              yaşamı hisset. <br /> <br /> Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Aliquid est similique non labore
              doloribus magnam dolorum, autem nam totam consectetur ex dolores
              suscipit, tempore voluptatibus cum pariatur neque placeat alias?
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button className=" w-full px-6 py-4 bg-gray-600 text-gri font-bold rounded-xl hover:bg-gray-900 transition-colors hover:cursor-pointer hover:shadow-lg">
              Keşfet
            </button>
          </div>

          <div className="absolute w-[1] h-20 bg-gray-300 bottom-0 left-20"></div>
          <div className="absolute w-[1] h-20 bg-gray-300 bottom-0 right-20"></div>
        </div>

        <div className="col-span-2 h-full">
          <video
            src="/ivovideo01.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover rounded-4xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnicalSection;
