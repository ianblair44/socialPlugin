describe('Unit : socialPluginWidget content services', function () {
    describe('Unit: Buildfire Provider', function () {
        var Buildfire;
        var SocialDataStore;
        var Location1;
        var SocialItem;
        beforeEach(module('socialPluginWidget'));
        beforeEach(inject(function (_Buildfire_,_SocialDataStore_, Location ,SocialItems) {
            Buildfire = _Buildfire_;
            SocialDataStore = _SocialDataStore_;
            Location1 = Location;
            SocialItem =SocialItems

        }));

        it('Buildfire should exist and be an object', function () {
            expect(typeof Buildfire).toEqual('object');
        });
        it('Location should exist and be an object', function () {
            expect(typeof Location1).toEqual('object');
        });

        it('SocialItem should exist and be an object', function () {
            expect(typeof SocialItem).toEqual('object');
        });



        it('Location.go should be a function', function () {
            console.info(">>>>>>>>>>",Location1.go);
            expect(typeof Location1.go).toEqual('function');
        });

        it('Location.go called', function () {
            console.info("Location.go Called ???????????????");
            Location1.go('#!@!');

        });
        it('Location.goToHome should be a function', function () {
            console.info(">>>>>>>>>>",Location1.go);
            expect(typeof Location1.goToHome).toEqual('function');
        });



        it('SocialDataStore should exist and be an object', function () {
            console.info(">>>>>>>>>>",SocialDataStore);
            expect(typeof SocialDataStore).toEqual('object');
        });

        it('SocialDataStore.createPost should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.createPost);
            expect(typeof SocialDataStore.createPost).toEqual('function');
        });

        it('SocialDataStor createPost called', function () {
            console.info("SocialDataStor.createPost Called ???????????????");
            SocialDataStore.createPost({});

        });

         it('SocialDataStore.getUsers should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.createPost);
            expect(typeof SocialDataStore.getUsers).toEqual('function');
        });

        it('SocialDataStor getUsers called', function () {
            console.info("SocialDataStor.createPost Called ???????????????");
            SocialDataStore.getUsers([],'sasas');

        });

        it('SocialDataStore.addComment should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.addComment);
            expect(typeof SocialDataStore.addComment).toEqual('function');
        });

        it('SocialDataStor addComment called', function () {
            console.info("SocialDataStor.addComment Called ???????????????");
            SocialDataStore.addComment({});

        });


        it('SocialDataStore.getThreadByUniqueLink should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.getThreadByUniqueLink);
            expect(typeof SocialDataStore.getThreadByUniqueLink).toEqual('function');
        });

        it('SocialDataStor getThreadByUniqueLink called', function () {
            console.info("SocialDataStor.getThreadByUniqueLink Called ???????????????");
            SocialDataStore.getThreadByUniqueLink('/thread/asas','sasa','asas');

        });

        it('SocialDataStore.getCommentsOfAPost should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.getCommentsOfAPost);
            expect(typeof SocialDataStore.getCommentsOfAPost).toEqual('function');
        });

        it('SocialDataStor getCommentsOfAPost called', function () {
            console.info("SocialDataStor.getCommentsOfAPost Called ???????????????");
            SocialDataStore.getCommentsOfAPost({});

        });


        it('SocialDataStore.addThreadLike should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.addThreadLike);
            expect(typeof SocialDataStore.addThreadLike).toEqual('function');
        });

        it('SocialDataStor addThreadLike called', function () {
            console.info("SocialDataStor.addThreadLike Called ???????????????");
            SocialDataStore.addThreadLike({},'/thread/asas','sasa','asas');

        });

        it('SocialDataStore.uploadImage should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.uploadImage);
            expect(typeof SocialDataStore.uploadImage).toEqual('function');
        });

        it('SocialDataStor uploadImage called', function () {
            console.info("SocialDataStor.uploadImage Called ???????????????");
            SocialDataStore.uploadImage({},'/thread/asas','sasa');

        });

        it('SocialDataStore.getUserSettings should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.getUserSettings);
            expect(typeof SocialDataStore.getUserSettings).toEqual('function');
        });

        it('SocialDataStor getUserSettings called', function () {
            console.info("SocialDataStor.getUserSettings Called ???????????????");
            SocialDataStore.getUserSettings({});

        });

        it('SocialDataStore.saveUserSettings should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.saveUserSettings);
            expect(typeof SocialDataStore.saveUserSettings).toEqual('function');
        });

        it('SocialDataStor saveUserSettings called', function () {
            console.info("SocialDataStor.saveUserSettings Called ???????????????");
            SocialDataStore.saveUserSettings({});

        });

        it('SocialDataStore.getThreadLikes should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.getThreadLikes);
            expect(typeof SocialDataStore.getThreadLikes).toEqual('function');
        });

        it('SocialDataStor getThreadLikes called', function () {
            console.info("SocialDataStor.getThreadLikes Called ???????????????");
            SocialDataStore.getThreadLikes('/thread/asas','sasa','asas');

        });


        it('SocialDataStore.removeThreadLike should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.removeThreadLike);
            expect(typeof SocialDataStore.removeThreadLike).toEqual('function');
        });

        it('SocialDataStor removeThreadLike called', function () {
            console.info("SocialDataStor.removeThreadLike Called ???????????????");
            SocialDataStore.removeThreadLike({},'/thread/asas','sasa');

        });


        it('SocialDataStore.reportPost should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.reportPost);
            expect(typeof SocialDataStore.reportPost).toEqual('function');
        });

        it('SocialDataStor reportPost called', function () {
            console.info("SocialDataStor.reportPost Called ???????????????");
            SocialDataStore.reportPost('121asas','sasa','asas');

        });

        it('SocialDataStore.deletePost should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.deletePost);
            expect(typeof SocialDataStore.deletePost).toEqual('function');
        });

        it('SocialDataStor deletePost called', function () {
            console.info("SocialDataStor.deletePost Called ???????????????");
            SocialDataStore.deletePost('121asas','sasa','asas');

        });

        it('SocialDataStore.deleteComment should be a function', function () {
            console.info(">>>>>>>>>>",SocialDataStore.deleteComment);
            expect(typeof SocialDataStore.deleteComment).toEqual('function');
        });

        it('SocialDataStor deleteComment called', function () {
            console.info("SocialDataStor.deleteComment Called ???????????????");
            SocialDataStore.deleteComment('121asas','/thread/sasa','asas','1212');

        });


        it('SocialItem.posts should be a function', function () {

            console.info(">>>>>>>>>>",SocialItem.getInstance);
            expect(typeof SocialItem.getInstance).toEqual('function');
        });

       it('SocialItem.getInstance called', function () {
            console.info("SocialItem.getInstance Called ???????????????");
            SocialItem.getInstance();

        });

        it('SocialItem.posts called', function () {
            console.info("SocialItem.posts Called ???????????????");
            SocialItem.getInstance().posts();

        });

        it('SocialItem.loggedInUserDetails called', function () {
            console.info("SocialItem.loggedInUserDetails Called ???????????????");
            SocialItem.getInstance().loggedInUserDetails();

        });

    });


});

