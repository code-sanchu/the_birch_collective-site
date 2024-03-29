import type { RichSection } from "./_common";

export type Pages = {
  landing: Landing;
  aboutUs: AboutUs;
  careers: Careers;
  donate: Donate;
  "donate-success": DonateSuccess;
  programmes: Programmes;
  ["volunteer-positions"]: VolunteerPositions;
  testimonials: Testimonials;
  "theory-of-change": TheoryOfChange;
  workshops: Workshops;
};

type Landing = {
  id: "landing-page";

  aboutUs: {
    heading: string;
    buttonText: string;
    entries: { id: string; text: string; index: number }[];
  };

  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
    infoPopover: {
      text: string;
    };
  };

  orgHeadings: {
    name: string;
    byline: string;
  };

  partners: {
    heading: string;
    subheading: string;
    entries: {
      id: string;
      dbConnections: { partnerId: string };
    }[];
  };

  photoAlbum: {
    heading: string;
    entries: {
      image: {
        dbConnections: { imageId: string };
        position: {
          x: number;
          y: number;
        };
      };
      id: string;
      index: number;
    }[];
  };

  programmes: {
    heading: string;
    subheading: string;
    entries: {
      id: string;
      dbConnections: { programmeId: string };
    }[];
    buttonText: string;
  };

  supporters: {
    heading: string;
    subheading: string;
    entries: {
      id: string;
      dbConnections: { supporterId: string };
    }[];
  };

  supportUs: {
    heading: string;
    donate: {
      buttonText: string;
      description: string;
      image: {
        dbConnections: {
          imageId: string | null;
        };
        position: {
          x: number;
          y: number;
        };
      };
    };

    volunteer: {
      buttonText: string;
      description: string;
      image: {
        dbConnections: {
          imageId: string | null;
        };
        position: {
          x: number;
          y: number;
        };
      };
    };
  };

  workshops: {
    image: {
      dbConnections: {
        imageId: string | null;
      };
      position: {
        x: number;
        y: number;
      };
    };
    textOverlay: {
      heading: string;
      body: string;
    };
  };
};

type AboutUs = {
  id: "about-page";
  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };
  heading: string;
  mainText: string;
  subheading: string;
  theTeam: {
    heading: string;
    text: string;
    members: {
      id: string;
      index: number;
      name: string;
      role: string;
      bio: string;
      image: {
        dbConnections: {
          imageId: string | null;
        };
        position: {
          x: number;
          y: number;
        };
      };
    }[];
  };
};

type Careers = {
  id: "careers-page";

  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };

  careers: {
    heading: string;

    text: string;

    entries: {
      id: string;
      dbConnections: { careerId: string };
    }[];
  };

  heading: string;

  mainText: string;

  followOnSocialMediaText: string;
};

type Donate = {
  id: "donate-page";

  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };

  heading: string;
  subheading: string;

  body: {
    heading: string;
    text: string;
    image: {
      dbConnections: {
        imageId: string | null;
      };
      position: {
        x: number;
        y: number;
      };
    };
  };
};

type Programmes = {
  id: "programmes-page";
  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };
  heading: string;
  mainText: string;
};

type Testimonials = {
  id: "testimonials-page";

  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };

  heading: string;

  mainText: string;

  participants: {
    heading: string;
    subheading: string;
    text: string;
  };

  professionals: {
    heading: string;
    subheading: string;
    text: string;
  };
};

type TheoryOfChange = {
  id: "theory-of-change-page";

  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };

  heading: string;

  mainText: string;

  sections: RichSection[];
};

type VolunteerPositions = {
  id: "volunteer-positions-page";

  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };

  heading: string;
  mainText: string;

  opportunities: {
    heading: string;

    entries: {
      id: string;
      index: number;
      dbConnections: { volunteerPositionId: string };
    }[];
  };
};

type Workshops = {
  id: "workshops-page";

  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };

  heading: string;

  mainText: string;

  aboutAmy: {
    followOnInstaText: string;

    heading: string;

    image: {
      dbConnections: {
        imageId: string | null;
      };
      position: {
        x: number;
        y: number;
      };
    };

    instaLink: string;

    text: string;
  };
};

type DonateSuccess = {
  id: "donate-success-page";

  bannerImage: {
    dbConnections: {
      imageId: string | null;
    };
    position: {
      x: number;
      y: number;
    };
  };

  heading: string;
  subheading: string;

  body: {
    heading: string;
    text: string;
    image: {
      dbConnections: {
        imageId: string | null;
      };
      position: {
        x: number;
        y: number;
      };
    };
  };
};
