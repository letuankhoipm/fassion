import { trigger, transition, style, query, animateChild, animate, group } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [
	transition('Home <=> Contact', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'relative',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('Three => Two, Two => One, Three => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);