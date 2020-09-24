import { trigger, state, style, transition, animate,keyframes } from '@angular/core';



/* DARK */

export const darkState=trigger('darkState', [
      state('light', style({
        opacity: 1
      })),
      state('dark', style({
        opacity: .1
      })),
      transition('dark => light', animate('1s ease-in')),
      transition('light => dark', animate('1s ease-out'))
    ]);

export const xdarkState=trigger('xdarkState', [
      state('light', style({
        opacity: 0
      })),
      state('dark', style({
        opacity: 1
      })),
      transition('dark => light', animate('1s ease-in')),
      transition('light => dark', animate('1s ease-out'))
    ]);


export const fade=trigger('fade', [
      state('horiz', style({
        opacity : 1
      })),
      state('angle', style({
        opacity : 1
      })),
      transition('horiz => angle', animate('1s ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: .75}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('angle => horiz', animate('1s ease-out', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: .75}),
        style({opacity: 1, offset: 1})
      ])))
    ]);

/* DARK END */
/* -------------------------------------------------------- */


export const lightRed=trigger('lightRed', [
      state('on', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 6px 6px #DF0000",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 6px 6px #DF0000",
        opacity : 0
      })),
      transition('on => off', animate('200ms ease-in')),
      transition('off => on', animate('200ms ease-out'))
    ]);


export const lightGreen=trigger('lightGreen', [
      state('on', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 6px 6px #00DF00",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 6px 6px #00DF00",
        opacity : 0
      })),
      transition('on => off', animate('200ms ease-in')),
      transition('off => on', animate('200ms ease-out'))
    ]);


export const lightGreenLine=trigger('lightGreenLine', [
    state('on', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 2px 2px #00DF00",
        opacity : 1
    })),
    state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 2px 2px #00DF00",
        opacity : 0
    })),
    transition('on => off', animate('200ms ease-in')),
    transition('off => on', animate('200ms ease-out'))
]);

export const lightYellow=trigger('lightYellow', [
      state('on', style({
        "background-color": "#FFE000",
        "box-shadow" : "0 0 6px 6px #DFC000",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FFE000",
        "box-shadow" : "0 0 6px 6px #DFC000",
        opacity : 0
      })),
      transition('on => off', animate('200ms ease-in')),
      transition('off => on', animate('200ms ease-out'))
    ]);

export const lightYellowLine=trigger('lightYellowLine', [
    state('on', style({
        "background-color": "#FFE000",
        "box-shadow" : "0 0 2px 2px #DFC000",
        opacity : 1
    })),
    state('off', style({
        "background-color": "#FFE000",
        "box-shadow" : "0 0 2px 2px #DFC000",
        opacity : 0
    })),
    transition('on => off', animate('200ms ease-in')),
    transition('off => on', animate('200ms ease-out'))
]);

export const lightWhite=trigger('lightWhite', [
      state('on', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 6px 6px #DFDFDF",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 6px 6px #DFDFDF",
        opacity : 0
      })),
      transition('on => off', animate('200ms ease-in')),
      transition('off => on', animate('200ms ease-out'))
    ]);

export const lightBlue=trigger('lightBlue', [
      state('on', style({
        "background-color": "#0000FF",
        "box-shadow" : "0 0 6px 6px #0000DF",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#0000FF",
        "box-shadow" : "0 0 6px 6px #0000DF",
        opacity : 0
      })),
      transition('on => off', animate('200ms ease-in')),
      transition('off => on', animate('200ms ease-out'))
    ]);



export const lightSmallWhite=trigger('lightSmallWhite', [
    state('on', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 1px 1px #FFFFFF",
        opacity : 1
    })),
    state('off', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 6px 6px #FFFFFF",
        opacity : 0
    })),
    transition('on => off', animate('200ms ease-in')),
    transition('off => on', animate('200ms ease-out'))
]);



export const lightNextRed=trigger('lightNextRed', [
    state('on', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 3px 3px #FF0000",
        opacity : 1
    })),
    state('off', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 3px 3px #FF0000",
        opacity : 0
    })),
    transition('on => off', animate('200ms ease-in')),
    transition('off => on', animate('200ms ease-out'))
]);


export const lightNextGreen=trigger('lightNextGreen', [
    state('on', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 3px 3px #00FF00",
        opacity : 1
    })),
    state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 3px 3px #00FF00",
        opacity : 0
    })),
    transition('on => off', animate('200ms ease-in')),
    transition('off => on', animate('200ms ease-out'))
]);


export const lightNextYellow=trigger('lightNextYellow', [
    state('on', style({
        "background-color": "#FFE000",
        "box-shadow" : "0 0 3px 3px #FFE000",
        opacity : 1
    })),
    state('off', style({
        "background-color": "#FFE000",
        "box-shadow" : "0 0 3px 3px #FFE000",
        opacity : 0
    })),
    transition('on => off', animate('200ms ease-in')),
    transition('off => on', animate('200ms ease-out'))
]);

