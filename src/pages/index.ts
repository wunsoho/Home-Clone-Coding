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