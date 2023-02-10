/* eslint-disable react/jsx-no-bind */
// @flow

import React, { Component } from 'react';
import {
    View
} from 'react-native';


/**
 * Bottom navigation bar.
 *
 * @extends Component
 */
class BottomNavBar extends Component<Props, *> {

    /**
     * Constructor of the Component.
     *
     * @inheritdoc
     */
    constructor(props) {
        super(props);

        // Bind event handlers so they are only bound once per instance.
        this._onNavigate = this._onNavigate.bind(this);

    }

    /**
     * Implements React's {@link Component#render()}. Renders a navigation
     * bottom bar.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {

        const { t, selected } = this.props;

        const userIconUri = require('../../../../images/blookanoo/user_icon.png');
        const archiveIconUri = require('../../../../images/blookanoo/archive_icon.png');
        const userSelectedIconUri = require('../../../../images/blookanoo/user-selected_icon.png');
        const archiveSelectedIconUri = require('../../../../images/blookanoo/archive-selected_icon.png');
        const scheduleIconUri = require('../../../../images/blookanoo/schedule_icon.png');
        const scheduleSelectedIconUri = require('../../../../images/blookanoo/schedule-selected_icon.png');

        // const cogIconUri = require('../../../../images/blookanoo/cog_icon.png');

        return (
            <View style = { baseStyle.bottomNavBar }>
                <View style = { baseStyle.menuContainer } >
                    <MenuBarButton
                        onPress = { selected === ACCOUNT_PAGE
                            ? undefined : this._onNavigate.bind(this, ACCOUNT_PAGE) }
                        src = { selected === ACCOUNT_PAGE ? userSelectedIconUri : userIconUri }
                        txt = { t('blookanooWelcomePage.Account') } />
                    { getFeatureFlags('archive')
                        && <MenuBarButton
                            onPress = { selected === PRE_RECORDED_PAGE
                                ? undefined : this._onNavigate.bind(this, PRE_RECORDED_PAGE) }
                            src = { selected === PRE_RECORDED_PAGE ? archiveSelectedIconUri : archiveIconUri }
                            txt = { t('blookanooWelcomePage.Archive') } />
                    }
                    <MenuBarButton
                        onPress = { selected === SCHEDULE_PAGE
                            ? undefined : this._onNavigate.bind(this, SCHEDULE_PAGE) }
                        src = { selected === SCHEDULE_PAGE ? scheduleSelectedIconUri : scheduleIconUri }
                        txt = { t('blookanooWelcomePage.Schedule') } />
                </View>
            </View>
        );
    }


    _onNavigate: () => void;

    /**
     * Handles back icon click in top nav bar.
     *
     * @param {string} targetPage - Page to be rendered.
     *
     * @protected
     * @returns {void}
     */
    _onNavigate(targetPage: string) {
        this.props.dispatch(renderRouteRequest(targetPage));
    }
}

export default translate(connect()(BottomNavBar));
