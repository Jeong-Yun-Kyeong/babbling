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
    routeName== 'Detail' ||
    routeName== 'Review' ||
    routeName== 'Reply' ||
    routeName== 'TalkDetail' ||
    routeName== 'PostDetail' 
    
    ) {
        screenMargin = 32;
    } else if(
        routeName == 'Main'
    ) {
        screenMargin = 14;
    }

    return screenMargin;
};