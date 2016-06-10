import {Control} from 'angular2/common';

export class UsernameValidators {
    static connotContainSpace(control: Control){
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true};

        return null;
    }
}
