// Contains dummy data for web app
// Don't remove anything from here (if not sure)

// Images
import {
  HomeIcon,
  SearchIcon,
  WatchlistIcon,
  OriginalsIcon,
  MoviesIcon,
  SeriesIcon,
  Slider1,
  Slider2,
  Slider3,
  Slider4,
  DisneyView,
  MarvelView,
  NationalView,
  PixarView,
  StarwarsView,
} from "../assets/images";

// Videos
import {
  DisneyVideo,
  MarvelVideo,
  NationalVideo,
  PixarVideo,
  StarwarsVideo,
} from "../assets/videos";

// Navbar Links
export const navLinks = [
  {
    name: "Home",
    icon: HomeIcon,
    url: "/home",
  },
  {
    name: "Search",
    icon: SearchIcon,
    url: "#",
  },
  {
    name: "Watchlist",
    icon: WatchlistIcon,
    url: "#",
  },
  {
    name: "Originals",
    icon: OriginalsIcon,
    url: "#",
  },
  {
    name: "Movies",
    icon: MoviesIcon,
    url: "#",
  },
  {
    name: "Series",
    icon: SeriesIcon,
    url: "#",
  },
];

// Image Slider Data
export const sliderData = [
  {
    name: "Slider Badging",
    src: Slider1,
  },
  {
    name: "Slider Scale",
    src: Slider2,
  },
  {
    name: "Slider Badag",
    src: Slider3,
  },
  {
    name: "Slider Scales",
    src: Slider4,
  },
];

// Viewers Data
export const viewersData = [
  {
    name: "Disney",
    imageSrc: DisneyView,
    videoSrc: DisneyVideo,
  },
  {
    name: "Marvel",
    imageSrc: MarvelView,
    videoSrc: MarvelVideo,
  },
  {
    name: "National",
    imageSrc: NationalView,
    videoSrc: NationalVideo,
  },
  {
    name: "Pixar",
    imageSrc: PixarView,
    videoSrc: PixarVideo,
  },
  {
    name: "Starwars",
    imageSrc: StarwarsView,
    videoSrc: StarwarsVideo,
  },
];
