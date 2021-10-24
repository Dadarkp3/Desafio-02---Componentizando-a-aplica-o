import { Button } from './Button';
interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface sideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

const SideBar = ({
  genres,
  handleClickButton,
  selectedGenreId,
}: sideBarProps) => {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>
      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
