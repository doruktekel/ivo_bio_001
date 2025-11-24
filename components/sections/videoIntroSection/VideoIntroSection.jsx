const VideoIntroSection = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center p-4 relative">
      <video
        src="/ivovideo01.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover rounded-4xl shadow-xl"
      />
      {/* <div className="absolute bottom-8 right-8 p-8 max-w-sm bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg text-gri select-none">
        <p className="font-extrabold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          tempora ratione nihil cum iure totam similique illo optio. Libero
          dignissimos dicta laudantium? Earum laborum quasi eligendi corporis
          rerum, hic excepturi.
        </p>
      </div> */}
    </div>
  );
};

export default VideoIntroSection;
