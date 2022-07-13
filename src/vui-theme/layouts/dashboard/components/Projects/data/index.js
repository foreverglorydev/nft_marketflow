// @mui material components
import Tooltip from '@mui/material/Tooltip';
import avatar1 from 'vui-theme/assets/images/avatar1.png';
import avatar2 from 'vui-theme/assets/images/avatar2.png';
import avatar3 from 'vui-theme/assets/images/avatar3.png';
import avatar4 from 'vui-theme/assets/images/avatar4.png';
import VuiAvatar from 'vui-theme/components/VuiAvatar';
// Vision UI Dashboard React components
import VuiBox from 'vui-theme/components/VuiBox';
import VuiProgress from 'vui-theme/components/VuiProgress';
import VuiTypography from 'vui-theme/components/VuiTypography';
// Images
import AdobeXD from 'vui-theme/examples/Icons/AdobeXD';
import Atlassian from 'vui-theme/examples/Icons/Atlassian';
import Invision from 'vui-theme/examples/Icons/Invision';
import Jira from 'vui-theme/examples/Icons/Jira';
import Slack from 'vui-theme/examples/Icons/Slack';
import Spotify from 'vui-theme/examples/Icons/Spotify';

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: 'pointer',
            position: 'relative',

            '&:not(:first-of-type)': {
              ml: -1.25,
            },

            '&:hover, &:focus': {
              zIndex: '10',
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: 'companies', align: 'left' },
      { name: 'members', align: 'left' },
      { name: 'budget', align: 'center' },
      { name: 'completion', align: 'center' },
    ],

    rows: [
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <AdobeXD size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Chakra Vision UI Version
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, 'Ryan Tompson'],
              [avatar2, 'Romina Hadid'],
              [avatar3, 'Alexander Smith'],
              [avatar4, 'Jessica Doe'],
            ])}
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              60%
            </VuiTypography>
            <VuiProgress value={60} color="info" label={false} sx={{ background: '#2D2E5F' }} />
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Atlassian size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Add Progress Track
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar2, 'Romina Hadid'],
              [avatar4, 'Jessica Doe'],
            ])}
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $3,000
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              10%
            </VuiTypography>
            <VuiProgress value={10} color="info" label={false} sx={{ background: '#2D2E5F' }} />
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Slack size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Fix Platform Errors
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, 'Ryan Tompson'],
              [avatar3, 'Alexander Smith'],
            ])}
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            Not set
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: '#2D2E5F' }} />
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Spotify size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Launch our Mobile App
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar4, 'Jessica Doe'],
              [avatar3, 'Alexander Smith'],
              [avatar2, 'Romina Hadid'],
              [avatar1, 'Ryan Tompson'],
            ])}
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $20,500
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: '#2D2E5F' }} />
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Jira size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Add the New Pricing Page
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar4, 'Jessica Doe']])}
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $500
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              25%
            </VuiTypography>
            <VuiProgress value={25} color="info" label={false} sx={{ background: '#2D2E5F' }} />
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Invision size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Redesign New Online Shop
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, 'Ryan Tompson'],
              [avatar4, 'Jessica Doe'],
            ])}
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $2,000
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              40%
            </VuiTypography>
            <VuiProgress value={40} color="info" label={false} sx={{ background: '#2D2E5F' }} />
          </VuiBox>
        ),
      },
    ],
  };
}
