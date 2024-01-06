interface ITeacher {
    firstName: string;
    lastName: string;
}

class Teacher {
    firstName: string;
    lastName: string;

    constructor(params: ITeacher) {
        this.firstName = params.firstName;
        this.lastName = params.lastName;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}


interface IMusicianTeacher extends ITeacher {
    instrument: string;
}

class MusicianTeacher extends Teacher {
    instrument: string;

    constructor(args: IMusicianTeacher) {
        super(args);
        this.instrument = args.instrument;
    }

    get fullName(): string {
        return `${super.fullName} instrument:${this.instrument}`;
    }
}

interface IProgrammerTeacher extends ITeacher {
    programmingLang: string;
}

class ProgrammerTeacher extends Teacher {
    programmingLang: string;

    constructor(args: IProgrammerTeacher) {
        super(args);
        this.programmingLang = args.programmingLang;
    }
}

enum TeacherTypes {
    musician,
    programmer
}

class TeacherFactory {
    private constructor() {
    }

    public static getTeacher(type: TeacherTypes.musician, properties: IMusicianTeacher): MusicianTeacher;
    public static getTeacher(type: TeacherTypes.programmer, properties: IProgrammerTeacher): ProgrammerTeacher;
    public static getTeacher(type: TeacherTypes, properties: IMusicianTeacher & IProgrammerTeacher) {
        switch (type) {
            case TeacherTypes.programmer:
                return new ProgrammerTeacher(properties);
            case TeacherTypes.musician:
                return new MusicianTeacher(properties);
            default:
                throw new Error('Wrong teacher type chosen');
        }
    }
}


const teacher = TeacherFactory.getTeacher(TeacherTypes.musician, {
    firstName: 'a',
    lastName: 'b',
    instrument: 'hand pan',
});

console.log(teacher.fullName);
