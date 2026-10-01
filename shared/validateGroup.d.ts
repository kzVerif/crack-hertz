export interface GroupValidationErrors {
  name?: string;
  link?: string;
  contentOrImage?: string;
  reaction?: string;
}

export interface GroupSanitizedData {
  name: string;
  links: string[];
  content: string;
  comments: string;
  reaction: string;
  images: any[];
  existingImages: string[];
  newImages: any[];
  totalImagesCount: number;
}

export interface GroupValidationResult {
  isValid: boolean;
  errors: GroupValidationErrors;
  message: string;
  sanitizedData: GroupSanitizedData;
}

export declare const ALLOWED_REACTIONS: string[];

export declare function extractValidLinks(rawLinks: any): string[];

export declare function countTotalImages(data?: any): number;

export declare function validateGroup(groupData?: any): GroupValidationResult;

export declare function isValidGroup(groupData?: any): boolean;

export default validateGroup;
