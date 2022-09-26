let folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

const move = (fileid, folderid) => {
  let file;
  folders.forEach((folder) => {
    if (folder.files !== undefined) {
      file = folder.files.find((x) => x.id === fileid);
    }
  });
  const folder = folders.find((folder) => folder.id === folderid);
  folder.files = [...folder.files, file];
  console.log(folders);
};

const parentFolder = (fileid) => {
  parent = [];
  folders.forEach((folder) => {
    if (folder.files !== undefined)
      file = folder.files.find((x) => {
        if (x.id === fileid) {
          console.log(folder.name);
        }
      });
  });
};

const remove = (fileid) => {
  let file;
  folders.forEach((folder) => {
    if (folder.files !== undefined) {
      file = folder.files.find((x) => x.id === fileid);
      folders = folder.files.filter((y) => y.id !== file.id);
      console.log(folders);
    }
  });
  return file;
};

const removeFolder = (folderid) => {
  folders.splice(
    folders.findIndex((folder) => folder.id === folderid),
    1
  );
  console.log(folders);
};



removeFolder(6);
parentFolder(17);
move(17, 6);
remove(17);
