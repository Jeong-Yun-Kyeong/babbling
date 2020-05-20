export function getMargin(routeName) {
    let screenMargin = 0;

    if( routeName== 'EmailLogin' ||
        routeName== 'Join' ||
        routeName== 'Login' ||
        routeName== 'PassWord' ||
        routeName== 'PWChange' ||
        routeName== 'BabyPlus' ||
        routeName== 'BabyPlus_my'
        
        ) {
        screenMargin = 40;
    } else if(routeName== 'BabyAlergy' ||
    routeName== 'BabyAlergy_my'
    
    ) {
        screenMargin = 32;
    } else if(
        routeName == 'Main'
    ) {
        screenMargin = 14;
    }

    return screenMargin;
};