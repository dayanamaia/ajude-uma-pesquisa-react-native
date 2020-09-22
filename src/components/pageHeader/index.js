import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import arowleftLight from './../../assets/images/arrow-left-light-icon.png';
import arowleftDark from './../../assets/images/arrow-left-dark-icon.png';
import menuIcon from './../../assets/images/menu-icon.png';
import menuIconLight from './../../assets/images/menu-icon-bg-light.png';
import styles from './styles.js';

const PageHeader = (props) => {
    const { title, btnBack, bg } = props;

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.info_nav}>
                    {btnBack &&
                        <BorderlessButton style={styles.btn_back}>
                            {bg && bg === 'dark' &&
                                <Image source={arowleftLight} resizeMode='contain' />
                            }
                            {!bg &&
                                <Image source={arowleftDark} resizeMode='contain' />
                            }
                        </BorderlessButton>
                    }
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.menu_btn}>
                    <BorderlessButton>
                    {bg && bg === 'dark' &&
                        <Image source={menuIconLight} resizeMode='contain' />
                    }
                    {!bg &&
                        <Image source={menuIcon} resizeMode='contain' />
                    }
                    </BorderlessButton>
                </View>
            </View>
        </View>
    );
}

export default PageHeader;