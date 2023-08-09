
export const isNull = <R,>( item: R ): boolean => {
    if(item === null || item === undefined || (typeof item === 'string' && item.length === 0)) {
        return true;
    }else {
        return false;
    }
}; 

export const splitCamelString = ( name : string ) => {
    let arr = name.split('').map( item => {
        if( item === item.toUpperCase() ) return ' ' + item;
        else return item;
    } ).toString().replace(/,/g, '');
    return arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase();
};

export const isImageUrl = ( url : string ) => {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};