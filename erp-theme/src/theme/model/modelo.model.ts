export interface AvatarModel{
    size?: Size;
    variant?: avatarVariant;
    }

export interface formFieldModel{
    texto?: string;
    size?: Size;
    appareance?: 'fill'| 'outline';
    }
export interface ElementModel{
        texto?: string;
        size?: Size;
        orientacion?: Orientation;
        appareance?: 'fill'| 'outline';
}
  
export enum Sizes {
    small = 'small',
    medium = 'medium',
    large = 'large',
      
}

export type Orientation = 'vertical' | 'horizontal' ;

export type Size = 'small' | 'medium' | 'large'  ;

export type avatarVariant = 'rounded' | 'square' | 'circular';

export type ArrayAvatars = AvatarModel[];
export type ArrayFormField = formFieldModel[];

export type ModelElement = ElementModel[];
