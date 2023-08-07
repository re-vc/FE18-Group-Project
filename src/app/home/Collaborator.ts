export class Collaborator implements ICollaborator {
    name: string;
    imageSRC: string;
    git: string;
    workingOn: string;
    leader: boolean;

    constructor(name: string, imageSRC: string, git: string, workingOn: string, leader: boolean) {
        this.name = name;
        this.imageSRC = imageSRC;
        this.git = git;
        this.workingOn = workingOn;
        this.leader = leader;
    }
}

export interface ICollaborator {
    name: string;
    imageSRC: string;
    git: string;
    workingOn: string;
    leader: boolean;
}

export let collaborators = [
    {
        name: "Stefan K.",
        imageSRC: "none",
        git: "https://github.com/Schokokorny",
        workingOn: "Events",
        leader: true
    },
    {
        name: "Sevinc A.",
        imageSRC: "none",
        git: "https://github.com/qyifos",
        workingOn: "Stories",
        leader: false
    },
    {
        name: "Thomas O.",
        imageSRC: "none",
        git: "https://github.com/Thomas-Ortsik",
        workingOn: "Directory",
        leader: false
    },
    {
        name: "Kristof N.",
        imageSRC: "none",
        git: "https://github.com/knagy96",
        workingOn: "Career",
        leader: false
    },
    {
        name: "Peter F. R.",
        imageSRC: "none",
        git: "https://github.com/re-vc",
        workingOn: "Home",
        leader: false
    }
];