const BasicSection2 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center relative">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-8xl font-extrabold selection:bg-yesil">
          Yaşama dair herşey
        </p>
        <p className="text-8xl font-extrabold">Farkındalık Mutluluk Huzur</p>
      </div>
      <div className="absolute bg-kahverengi w-[400px] h-4 rounded-l-full right-0 top-180 "></div>
      <div className="absolute bg-sari w-[400px] h-4 rounded-r-full left-0 top-44 "></div>
    </div>
  );
};

export default BasicSection2;
