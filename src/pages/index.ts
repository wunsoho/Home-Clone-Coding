import cat from '../img/cat.avif';
import s1 from '../img/s1.avif';
import s2 from '../img/s2.avif';
import s3 from '../img/s3.avif';
import s4 from '../img/s4.avif';
import s5 from '../img/s5.avif';
import s6 from '../img/s6.avif';
import s7 from '../img/s7.avif';
import s8 from '../img/s8.avif';
import s9 from '../img/s9.avif';
import s10 from '../img/s10.avif';
import s11 from '../img/s11.avif';
import s12 from '../img/s12.avif';
import s13 from '../img/s13.avif';
import s14 from '../img/s14.avif';
import s15 from '../img/s15.avif';
import s16 from '../img/s16.avif';
import s17 from '../img/s17.avif';
import s18 from '../img/s18.avif';
import s19 from '../img/s19.avif';

export {
  cat, s1, s2, s3, s4, s5,
  s6, s7, s8, s9, s10, s11,
  s12, s13, s14, s15, s16, s17, s18, s19
}

const modules = {
    Community: './community/Community',
    Life: './life/Life',
    Shopping: './shopping/Shopping',
    Recommand: './community/Recommand',
    Channel: './community/Channel',
    Category: './shopping/Category',
    Best: './shopping/Best',
    Part: './life/Part',
    Dwelling: './life/Dwelling',
    Housewarming: './community/Housewarming',
    Housephoto: './community/Housephoto',
    ThreeD: './community/ThreeD',
    Storage: './community/Storage',
    Pet: './community/Pet',
    BabyCare: './community/BabyCare',
    Homestorang: './community/Homestorang',
    Plan: './community/Plan',
    Collectable: './community/Collectable',
    Camping: './community/Camping',
    Hobby: './community/Hobby',
    Hotplace: './community/Hotplace',
    Event: './community/Event'
  };
  
  export const loadModules = async () => {
    const modulesPromises = Object.entries(modules).map(([key, path]) => 
      import(`${path}`).then((module) => [key, module.default])
    );
    
    const loadedModules = await Promise.all(modulesPromises);
    
    return Object.fromEntries(loadedModules);
  };