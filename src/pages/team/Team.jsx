import React, { PureComponent} from 'react';

import map from 'lodash/map';

import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

import Teamvitar from '../../components/avatar/Teamvitar';

import textHelpers from '../../helpers/text';

import {
  TeamContainer,
  listStyles,
} from './styles';

const SelectableList = makeSelectable(List);

const teams = [{
  groups: 3,
  id: 1,
  members: 16,
  name: 'Ministry Team',
}, {
  groups: 1,
  id: 2,
  members: 4,
  name: 'Sound Team',
}, {
  groups: 3,
  id: 3,
  members: 27,
  name: 'Worship Team',
}, {
  groups: 4,
  id: 4,
  members: 8,
  name: 'Children\'s Team',
}];


class Team extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 1,
    };

    this.handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    this.generateSecondaryText = (groups, memebers) => `${groups} group${textHelpers.pluralize(groups)} | ${memebers} member${textHelpers.pluralize(memebers)}`;

    this.renderTeamList = () => map(teams, (team) => <ListItem
      key={team.id}
      leftAvatar={<Avatar>IF</Avatar>}
      primaryText={team.name}
      secondaryText={this.generateSecondaryText(team.groups, team.members)}
      value={team.id}
    />);
  }

  render() {
    const {
      selectedIndex,
    } = this.state;

    return (
      <TeamContainer>
        <SelectableList
          style={listStyles}
          value={selectedIndex}
          onChange={this.handleRequestChange}
        >
          <Subheader>Teams List</Subheader>
          {this.renderTeamList()}
        </SelectableList>
      </TeamContainer>
    );
  }
}

export default Team;
