type MusicPlayerProps = {
  className?: string;
};

export default function MusicPlayer({ className }: MusicPlayerProps) {
  return (
    <div className={`max-w-xl mx-auto mt-8 ${className}`}>
<iframe className="rounded-[12px]" src="https://open.spotify.com/embed/artist/03mAzjt1dUtfpewYPEbTek?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}