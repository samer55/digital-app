import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import Avatar from "./../components/Avatar";
import Colors from "./../constants/Colors";
import ProfileLink from "./../components/ProfileLink";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const ProfileHeader = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  padding-top: 65px;
  align-items: center;
  width: 100%;
`;

const AvatarContainer = styled.View`
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-weight: 600;
  color: ${Colors.blackColor};
  font-size: 24px;
  margin-bottom: 5px;
`;

const Bio = styled.Text`
  margin-bottom: 20px;
  color: ${Colors.greyColor};
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(151, 151, 151, 0.2);
  margin-bottom: 30px;
`;

const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const DataPointContainer = styled.View`
  align-items: center;
  width: 33%;
  justify-content: center;
`;

const DataPointNumber = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 3.5px;
  align-items: center;
`;

const DataPointName = styled.Text`
  color: ${Colors.greyColor};
  font-size: 12px;
`;

const LinksList = styled.ScrollView``;

const ProfileScreenPresenter = () => (
  <Container>
    <ProfileHeader>
      <AvatarContainer>
        <Avatar
          size="lg"
          source={require("../../assets/images/lgAvatar.png")}
        />
      </AvatarContainer>
      <Name>{this.props.appStore.username}</Name>
      <Bio>App developer</Bio>
      <Divider />

    </ProfileHeader>
    <LinksList
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 20
      }}
    >
      <ProfileLink
        name="Add NEWS"
        description="Normal news for everyone"
        iconName={Platform.OS === "ios" ? "ios-trending-up" : "md-trending-up"}
      />
      <ProfileLink
        name="Add Hot News"
        description="Special news for important things"
        iconName={Platform.OS === "ios" ? "ios-trending-up" : "md-trending-up"}
      />


      <ProfileLink
        name="Settings"
        description="Profile and security information"
        iconName={Platform.OS === "ios" ? "ios-trending-up" : "md-trending-up"}
      />
      <ProfileLink
        name="Log out"
        description=""
        iconName={Platform.OS === "ios" ? "ios-log-out" : "md-trending-up"}
      />
    </LinksList>
  </Container>
);

export default ProfileScreenPresenter;
