export interface AvatarModel{
size?: Size;
variant?: avatarVariant;
}


export type Size = 'small' | 'medium' | 'large'  ;

export type Orientation = 'vertical' | 'horizontal' ;

export type avatarVariant = 'rounded' | 'square' | 'circular';

export type AvatasrModel = AvatarModel[];

