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
      state('on', style({
        opacity : 1
      })),
      state('off', style({
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: .75}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: .75}),
        style({opacity: 1, offset: 1})
      ])))
    ]);

/* DARK END */
/* -------------------------------------------------------- */
/* DISTANT SIGNALS */

export const distPlateState=trigger('distPlateState', [
      state('on', style({
        transform : "scale(1,1)"
      })),
      state('off', style({
        transform : "scale(1,.05)"
      })),
      transition('on => off', animate('1s 1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);


export const plateState=trigger('plateState', [
      state('on', style({
        transform : "scale(1,1)"
      })),
      state('off', style({
        transform : "scale(1,.05)"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);


/* DISTANT SIGNAL LIGHTS */
export const lightGreenWhite=trigger('lightGreenWhite', [
      state('on', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 4px 4px #00FF00",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 4px 4px #FFFFFF",
        opacity : 1
      })),
      transition('on => off', animate('1s 1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FFFFFF", "box-shadow" : "0 0 4px 4px #FFFFFF", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#00FF00", "box-shadow" : "0 0 4px 4px #00FF00", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);

/* DISTANT SIGNAL LIGHTS END */
/* DISTANT SIGNALS END */
/* -------------------------------------------------------- */
/* MAIN SIGNALS */

export const nextTopArmState=trigger('nextTopArmState', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(-45deg)"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s 1s ease-out'))
    ]);

export const topArmState=trigger('topArmState', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(-45deg)"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);

export const distArmState=trigger('distArmState', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(-45deg)"
      })),
      transition('on => off', animate('1s 1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);



export const prismState=trigger('prismState', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(-65deg)"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);

/* MAIN SIGNAL LIGHTS */

export const nextLightRedWhite=trigger('nextLightRedWhite', [
      state('on', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 2px 2px #FF0000",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 2px 2px #FFFFFF",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FFFFFF", "box-shadow" : "0 0 2px 2px #FFFFFF", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s 1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FF0000", "box-shadow" : "0 0 2px 2px #FF0000", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);

export const lightRedWhite=trigger('lightRedWhite', [
      state('on', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 4px 4px #FF0000",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 4px 4px #FFFFFF",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FFFFFF", "box-shadow" : "0 0 4px 4px #FFFFFF", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FF0000", "box-shadow" : "0 0 4px 4px #FF0000", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);

export const lightRedYellow=trigger('lightRedYellow', [
      state('on', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 4px 4px #FF0000",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FFE000",
        "box-shadow" : "0 0 4px 4px #FFE000",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FFE000", "box-shadow" : "0 0 4px 4px #FFE000", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FF0000", "box-shadow" : "0 0 4px 4px #FF0000", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);

export const nextLightRedGreen=trigger('nextLightRedGreen', [
      state('on', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 2px 2px #FF0000",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 2px 2px #00FF00",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#00FF00", "box-shadow" : "0 0 2px 2px #00FF00", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s 1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FF0000", "box-shadow" : "0 0 2px 2px #FF0000", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);

export const nextLightRedYellow=trigger('nextLightRedYellow', [
      state('on', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 2px 2px #FF0000",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FFE000",
        "box-shadow" : "0 0 2px 2px #FFE000",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FFE000", "box-shadow" : "0 0 2px 2px #FFE000", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s 1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FF0000", "box-shadow" : "0 0 2px 2px #FF0000", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);

/* MAIN SIGNAL LIGHTS END */
/* MAIN SIGNALS END */



export const nextPrismState=trigger('nextPrismState', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(-65deg)"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s 1s ease-out'))
    ]);

export const distPrismState=trigger('distPrismState', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(-65deg)"
      })),
      transition('on => off', animate('1s 1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);

export const distPrism3State=trigger('distPrism3State', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(65deg)"
      })),
      transition('on => off', animate('1s 1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);



export const distDiscState=trigger('distDiscState', [
      state('on', style({
        transform : "scale(1,1)"
      })),
      state('off', style({
        transform : "scale(.05,1)"
      })),
      transition('on => off', animate('1s 1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);

export const discState=trigger('discState', [
      state('on', style({
        transform : "scale(1,1)"
      })),
      state('off', style({
        transform : "scale(.05,1)"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);

 
export const lightBlueWhite=trigger('lightBlueWhite', [
      state('on', style({
        "background-color": "#0000FF",
        "box-shadow" : "0 0 4px 4px #0000FF",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 4px 4px #FFFFFF",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FFFFFF", "box-shadow" : "0 0 4px 4px #FFFFFF", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#0000FF", "box-shadow" : "0 0 4px 4px #0000FF", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);
 

export const lightYellowGreen=trigger('lightYellowGreen', [
      state('on', style({
        "background-color": "#FFFF00",
        "box-shadow" : "0 0 4px 4px #FFFF00",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 4px 4px #00FF00",
        opacity : 1
      })),
      transition('on => off', animate('1s 1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#00FF00", "box-shadow" : "0 0 4px 4px #00FF00", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FFFF00", "box-shadow" : "0 0 4px 4px #FFFF00", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);
 

 

export const lightRedGreen=trigger('lightRedGreen', [
      state('on', style({
        "background-color": "#FF0000",
        "box-shadow" : "0 0 4px 4px #FF0000",
        opacity : 1
      })),
      state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 4px 4px #00FF00",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#00FF00", "box-shadow" : "0 0 4px 4px #00FF00", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({"background-color": "#FF0000", "box-shadow" : "0 0 4px 4px #FF0000", offset: 0.66}),
        style({opacity: 1, offset: 1})
      ])))
    ]);
 

export const lightNoneGreen=trigger('lightNoneGreen', [
      state('on', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 4px 4px #00FF00",
        opacity : 0
      })),
      state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 4px 4px #00FF00",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 0, offset: 1}),
      ])))
    ]);

export const lightNoneWhite=trigger('lightNoneWhite', [
      state('on', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 4px 4px #FFFFFF",
        opacity : 0
      })),
      state('off', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 4px 4px #FFFFFF",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 0, offset: 1}),
      ])))
    ]);

 
export const distLightNoneGreen=trigger('distLightNoneGreen', [
      state('on', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 4px 4px #00FF00",
        opacity : 0
      })),
      state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 4px 4px #00FF00",
        opacity : 1
      })),
      transition('on => off', animate('1s 1s ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 0, offset: 1}),
      ])))
    ]);


export const nextLightNoneGreen=trigger('nextLightNoneGreen', [
      state('on', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 2px 2px #00FF00",
        opacity : 0
      })),
      state('off', style({
        "background-color": "#00FF00",
        "box-shadow" : "0 0 2px 2px #00FF00",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s 1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 0, offset: 1}),
      ])))
    ]);

export const nextLightNoneWhite=trigger('nextLightNoneWhite', [
      state('on', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 2px 2px #FFFFFF",
        opacity : 0
      })),
      state('off', style({
        "background-color": "#FFFFFF",
        "box-shadow" : "0 0 2px 2px #FFFFFF",
        opacity : 1
      })),
      transition('on => off', animate('1s ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('off => on', animate('1s 1s ease-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.33}),
        style({opacity: 0, offset: 1}),
      ])))
    ]);

export const verticalArmState=trigger('verticalArmState', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(45deg)"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);


export const nextVerticalArmState=trigger('nextVerticalArmState', [
      state('on', style({
        transform : "rotate(0deg)"
      })),
      state('off', style({
        transform : "rotate(45deg)"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s 1s ease-out'))
    ]);



export const discMoveState=trigger('discMoveState', [
      state('on', style({
        transform : "scale(1,1)",
        left: "64.5%"
      })),
      state('off', style({
        transform : "scale(.05,1)",
        left: "66.5%"
      })),
      transition('on => off', animate('1s ease-in')),
      transition('off => on', animate('1s ease-out'))
    ]);







